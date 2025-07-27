
export class AppConfigService {
    protected static instance: AppConfigService

    public readonly settings: Record<string, string> = {
      companyName: 'company name',
      footer: 'footer',
    };

    protected constructor(
    ) { }

    public static getInstance(): AppConfigService {
      if(!AppConfigService.instance) {
        AppConfigService.instance = new AppConfigService()
      }
      return AppConfigService.instance
    }

    public getSetting(key: string): string | undefined {
      return this.settings[key];
    }

    public setSetting(key: string, value: string): void {
       this.settings[key] = value;
    }
  }