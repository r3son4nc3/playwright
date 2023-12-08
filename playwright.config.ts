import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
   testMatch: /.*test.ts/,
  use: {
    headless: true,
    channel: "chrome",
    //screenshot: "off",
    //video: "retain-on-failure",
  },
  retries: 1,
  reporter: [
      ["dot"], ["json",{
outputFile: "jsonreporst/Jsonreport.json"
    } ], ["html", {
open:"always"
}]
]

};
export default config
