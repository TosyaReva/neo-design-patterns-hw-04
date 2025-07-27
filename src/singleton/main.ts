import { AppConfigService } from "./AppConfigService";

const config1 = AppConfigService.getInstance();
config1.setSetting("companyName", "Acme Inc.")
config1.setSetting("footer", "Confidential")

const config2 = AppConfigService.getInstance();
config2.setSetting("companyName", "Another Corp")
config2.setSetting("footer", "Top Secret")

console.log(config1.settings.companyName); // Acme Inc.
console.log(config2.settings.companyName); // Another Corp

console.log("config1 === config2 ? " + Boolean(config1 === config2))