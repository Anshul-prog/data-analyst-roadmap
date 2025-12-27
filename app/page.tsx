'use client';

import * as React from "react";
import { roadmapData } from "./data/roadmapData";
import { PlayCircle, BookOpen, ExternalLink, Trophy, Check, ListVideo } from "lucide-react";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@radix-ui/react-accordion";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// --- Helper ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Custom Components ---
const CustomProgress = ({ value }: { value: number }) => (
  <div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
    <div 
      className="h-full bg-neutral-200 transition-all duration-500 ease-in-out" 
      style={{ width: `${value}%` }} 
    />
  </div>
);

const CustomCheckbox = ({ checked, onCheckedChange }: { checked: boolean; onCheckedChange: () => void }) => (
  <div 
    onClick={onCheckedChange}
    className={cn(
      "h-6 w-6 rounded border cursor-pointer flex items-center justify-center transition-all shrink-0",
      checked ? "bg-green-600 border-green-600" : "border-neutral-600 bg-transparent hover:border-neutral-500"
    )}
  >
    {checked && <Check size={14} className="text-white" />}
  </div>
);

export default function RoadmapDashboard() {
  const [completed, setCompleted] = React.useState<string[]>([]);
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
    const saved = localStorage.getItem('roadmap_progress');
    if (saved) setCompleted(JSON.parse(saved));
  }, []);

  const toggleModule = (id: string) => {
    const newCompleted = completed.includes(id)
      ? completed.filter((c) => c !== id)
      : [...completed, id];
    setCompleted(newCompleted);
    localStorage.setItem('roadmap_progress', JSON.stringify(newCompleted));
  };

  const getProgress = (trackId: number) => {
    const track = roadmapData.find(t => t.id === trackId);
    if (!track || track.subModules.length === 0) return 0;
    const finished = track.subModules.filter(m => completed.includes(m.id)).length;
    return Math.round((finished / track.subModules.length) * 100);
  };

  if (!isClient) return null;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 font-sans p-6 md:p-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="mb-12 border-b border-neutral-800 pb-8">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">Data Analyst Roadmap</h1>
          <p className="text-neutral-400">Master Excel, SQL, and Power BI in 14 Weeks.</p>
        </header>

        <div className="space-y-4">
          {roadmapData.map((track) => {
            const progress = getProgress(track.id);
            const isFinished = progress === 100;

            return (
              <Accordion 
                key={track.id} 
                type="single" 
                collapsible 
                className="bg-[#171717] border border-neutral-800 rounded-xl px-2 overflow-hidden"
              >
                <AccordionItem value={`item-${track.id}`} className="border-none">
                  <AccordionTrigger className="hover:no-underline px-4 py-6 w-full flex items-center justify-between group">
                    <div className="flex items-center gap-6 text-left">
                      <div className={cn(
                        "flex items-center justify-center w-12 h-12 rounded-lg font-bold text-xl shrink-0 transition-colors",
                        isFinished ? "bg-green-900/30 text-green-500" : "bg-neutral-800 text-neutral-400"
                      )}>
                        {isFinished ? <Check size={24} /> : track.id}
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h2 className="text-lg font-semibold text-white group-hover:text-neutral-100">{track.title}</h2>
                          <span className="text-[10px] px-2 py-0.5 rounded border border-neutral-700 text-neutral-400 uppercase tracking-wider">
                            {track.tag}
                          </span>
                        </div>
                        <p className="text-sm text-neutral-500 hidden md:block">{track.description}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex flex-col items-end gap-2 w-32 mr-4">
                      <span className="text-xs text-neutral-400 font-medium">{progress}% Complete</span>
                      <CustomProgress value={progress} />
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-4 pb-6 pt-2">
                    <div className="pl-0 md:pl-[4.5rem] space-y-6">
                      
                      {/* Weekly Modules */}
                      <div className="grid gap-3">
                        {track.subModules.map((module) => (
                          <div 
                            key={module.id} 
                            className={cn(
                              "group p-4 rounded-lg border transition-all flex gap-4 items-start",
                              completed.includes(module.id) 
                                ? "bg-green-900/10 border-green-900/30" 
                                : "bg-neutral-900/50 border-neutral-800 hover:border-neutral-700"
                            )}
                          >
                            <CustomCheckbox 
                              checked={completed.includes(module.id)} 
                              onCheckedChange={() => toggleModule(module.id)} 
                            />
                            
                            <div className="flex-1">
                              <h3 className={cn(
                                "font-medium mb-1 transition-colors",
                                completed.includes(module.id) ? "text-neutral-500 line-through" : "text-neutral-200"
                              )}>
                                {module.title}
                              </h3>
                              <p className="text-sm text-neutral-500 mb-4">{module.description}</p>
                              
                              <div className="flex flex-wrap gap-2">
                                {module.resources.map((res, i) => (
                                  <a
                                    key={i}
                                    href={res.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-xs text-neutral-300 transition-colors border border-neutral-700"
                                  >
                                    {res.type === 'playlist' ? <ListVideo size={12} /> : 
                                     res.type === 'video' ? <PlayCircle size={12} /> : <BookOpen size={12} />}
                                    {res.label}
                                    <ExternalLink size={10} className="opacity-50" />
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Projects Section (UPDATED FOR 2 PROJECTS) */}
                      <div className="mt-6 grid md:grid-cols-2 gap-4">
                        {track.projects.map((proj, idx) => (
                          <div key={idx} className="p-5 rounded-lg border border-amber-900/30 bg-amber-950/10 flex flex-col gap-3">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-amber-900/20 rounded-md text-amber-500 shrink-0">
                                <Trophy size={18} />
                              </div>
                              <h4 className="text-xs font-bold text-amber-500 uppercase tracking-wide">
                                Project {idx + 1}
                              </h4>
                            </div>
                            <div>
                              <h3 className="text-neutral-200 font-medium text-sm">{proj.title}</h3>
                              <p className="text-xs text-neutral-500 mt-1">{proj.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            );
          })}
        </div>
      </div>
    </div>
  );
}