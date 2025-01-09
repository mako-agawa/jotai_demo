
import { atomWithStorage } from 'jotai/utils';

export const gameIdAtom = atomWithStorage('gameId', "");
export const userIdAtom = atomWithStorage('userId', "");
export const topPageModeAtom = atomWithStorage('topPageMode', { mode: 'top' });
export const gamePageModeAtom = atomWithStorage('gamePageMode', { mode: 'prepare' });
