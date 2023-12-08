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
    
  ],
};
export default config;
