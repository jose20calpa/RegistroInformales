import { AppConfigService } from '../services/app-config.service';

export function loadToken(appConfigService: AppConfigService) {
    return async(): Promise<any> => {
        return await appConfigService.loadToken();
      }
}
