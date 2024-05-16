"use client";
import FaqTabs from "./FaqTabs";
import DaysTabs from "./DaysTabs";
import TourForm from "../Forms/TourForm";
import TourInfoForm from "./TourInfoForm";
import React, { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { Category, Day, Faq, Tour } from "@prisma/client";

export default function TourForms({
  categories,
  tour,
  days,
  faqs,
}: {
  tour: Tour;
  categories: Category[];
  days: Day[];
  faqs: Faq[];
}) {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    // Calculate progress based on active tab
    let calculatedProgress = 0;
    switch (activeTab) {
      case "overview":
        calculatedProgress = 25;
        break;
      case "info":
        calculatedProgress = 50;
        break;
      case "days":
        calculatedProgress = 75;
        break;
      case "faqs":
        calculatedProgress = 100;
        break;
      default:
        calculatedProgress = 0;
    }
    setProgress(calculatedProgress);
  }, [activeTab]);

  const [progress, setProgress] = useState(0);

  const tabs = [
    {
      title: "Overview",
      path: "overview",
    },
    {
      title: "Tour Info",
      path: "info",
    },
    {
      title: "Days",
      path: "days",
    },
    {
      title: "Faqs",
      path: "faqs",
    },
  ];

  return (
    <div>
      <div className='max-w-3xl mx-auto'>
        <div className='flex justify-between mb-1 '>
          <span className='text-base font-medium text-blue-700 dark:text-white'>
            Tour Completion
          </span>

          <span className='text-sm font-medium text-blue-700 dark:text-white'>
            {`${progress}%`}
          </span>
        </div>

        <Progress value={progress} className='w-[100%]' />
      </div>

      <div className='text-sm font-medium text-center text-gray-500  dark:text-gray-400 dark:border-gray-700 max-w-3xl mx-auto pt-8'>
        <ul className='flex flex-wrap -mb-px'>
          {tabs.map((tab) => (
            <li key={tab.title} className='me-2'>
              <button
                onClick={() => setActiveTab(tab.path)}
                className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${
                  activeTab === tab.path
                    ? "text-blue-600  border-blue-600 active dark:text-blue-500 dark:border-blue-500"
                    : ""
                }`}
              >
                {tab.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className='py-8 px-4'>
        {activeTab === "overview" ? (
          <TourForm tour={tour} categories={categories} />
        ) : activeTab === "info" ? (
          <TourInfoForm tour={tour} />
        ) : activeTab === "days" ? (
          <DaysTabs days={days} tour={tour} />
        ) : (
          <FaqTabs faqs={faqs} tour={tour} />
        )}
      </div>
    </div>
  );
}
