import SafeAreaController from './controller';
import { registerPlugin } from '@capacitor/core';
import type { SafeAreaPlugin } from './definitions';

const SafeArea = registerPlugin<SafeAreaPlugin>('SafeArea', {
    web: () => import('./web').then(m => new m.SafeAreaPluginWeb()),
});

const controller = new SafeAreaController();

export { controller as SafeAreaController }

export * from './definitions';
export { SafeArea };
