"use client";

import { useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { Compass, BookOpenText, School } from "lucide-react";
import { HistoryTab } from "./HistoryTab";
import { InfraTab } from "./InfraTab";
import { IntroComponent } from "./IntroComponent";
import { LocationTab } from "./LocationTab";

const tabItems = [
  { value: "historia", label: "História", icon: BookOpenText },
  { value: "infraestrutura", label: "Infraestrutura", icon: School },
  { value: "localizacao", label: "Localização", icon: Compass },
] as const;

export function NavigationsTab() {
  const [activeTab, setActiveTab] =
    useState<(typeof tabItems)[number]["value"]>("historia");

  const activeTabLabel =
    tabItems.find((tab) => tab.value === activeTab)?.label ?? "História";

  return (
    <section
      aria-labelledby="sobre-tabs-title"
      className="relative overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[linear-gradient(180deg,#fff,var(--color-background))] p-4 shadow-[0_24px_60px_-42px_rgba(31,61,43,0.45)] sm:p-6"
    >
      <div className="pointer-events-none absolute -top-14 left-10 h-36 w-36 rounded-full bg-[var(--color-map-glow)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-14 right-6 h-40 w-40 rounded-full bg-[var(--color-primary-light)]/25 blur-3xl" />

      <Tabs.Root
        value={activeTab}
        onValueChange={(value) =>
          setActiveTab(value as (typeof tabItems)[number]["value"])
        }
        className="relative"
      >
        <IntroComponent activeTabLabel={activeTabLabel} tabItems={tabItems} />

        <Tabs.Content value="historia" className="outline-none">
          <HistoryTab />
        </Tabs.Content>

        <Tabs.Content value="infraestrutura" className="outline-none">
          <InfraTab />
        </Tabs.Content>

        <Tabs.Content value="localizacao" className="outline-none">
          <LocationTab />
        </Tabs.Content>
      </Tabs.Root>
    </section>
  );
}

export default NavigationsTab;
