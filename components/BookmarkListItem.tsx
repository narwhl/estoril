import React from "react";
import { GlobeAltIcon } from "@heroicons/react/24/outline";

export default function BookmarkListItem() {
  return (
    <div className="flex flex-col max-w-lg border-b pb-6">
      <span className="font-2xl font-serif">Chris's Wiki :: blog/linux/LinuxBootOverview</span>
      <div className="flex text-slate-500 space-x-4 font-medium text-sm">
        <dl className="flex items-center space-x-1">
          <dt>
            <GlobeAltIcon className="w-4 h-4"/>
          </dt>
          <dd>utcc.utoronto.ca</dd>
        </dl>
        <span>by Testing</span>
      </div>
      <p className="mt-2 font-serif">For reasons beyond the scope of this entry, today I feel like writing down a broad and simplified overview of how modern Linux systems boot. Due to ...</p>
      
    </div>
  )
}