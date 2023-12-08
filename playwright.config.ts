import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
   testMatch: /.*test.ts/,
  use: {
    headless: true,
    channel: "chrome",
    //screenshot: "off",
    //video: "retain-on-failure",
  },
  
  reporter: [
    ["dot"],
    [
      "json",
      {
        outputFile: "reports/report.json",
      },
    ],
    [
      "html",
      {
        open: "always",
      },
    ],
  ],
};
export default config;
