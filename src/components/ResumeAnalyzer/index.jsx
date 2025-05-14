"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import extractTextFromPDF from "./doctotext";

const ResumeAnalyzer = () => {
  const [resumeText, setResumeText] = useState("");
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fileName, setFileName] = useState("");

  const skillKeywords = [
    "React", "JavaScript", "TypeScript", "Node.js", "MySQL", "MongoDB",
    "HTML", "CSS", "Express", "Java", "AWS", "Docker", "PostgreSQL",
  ];

  const analyzeSkills = (text) => {
    const found = skillKeywords.filter((skill) =>
      new RegExp(`\\b${skill}\\b`, "i").test(text)
    );
    setSkills(found);
  };

  const handlePDFUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file || file.type !== "application/pdf") return;

    setFileName(file.name);
    setLoading(true);
    const text = await extractTextFromPDF(file);
    setResumeText(text);
    analyzeSkills(text);
    setLoading(false);
  };

  return (
    <div className="w-full mt-4">
      <Card className="w-full min-h-[400px]">
        <CardHeader>
          <CardTitle>Resume Analyzer</CardTitle>
          <CardDescription>
            Upload your PDF resume to extract text and detect skills.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input type="file" accept=".pdf" onChange={handlePDFUpload} />
          {fileName && <p className="text-sm text-muted-foreground">Uploaded: {fileName}</p>}
          {loading && <p className="text-blue-500 font-medium">Extracting text...</p>}

          {resumeText && (
            <>
              <div className="text-sm font-medium">Skills Detected:</div>
              <div className="flex flex-wrap gap-2">
                {skills.length > 0 ? (
                  skills.map((skill) => <Badge key={skill}>{skill}</Badge>)
                ) : (
                  <span className="text-muted-foreground text-sm">No skills found</span>
                )}
              </div>
              <div className="p-2 border rounded bg-gray-100 max-h-[200px] overflow-y-auto text-sm whitespace-pre-wrap">
                {resumeText.slice(0, 1000)}
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ResumeAnalyzer;
