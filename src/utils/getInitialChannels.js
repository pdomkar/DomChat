import * as Immutable from 'immutable';
import {uuid} from './uuidGenerator';
import {} from '../constants/localStorageKeys';
import { ITEMS_ALL_ID, ITEMS_BY_ID } from '../constants/localStorageKeys';

const firstId = uuid();
const secondId = uuid();

const firstChannel = {
    id: firstId,
    name: 'React',
};

const secondChannel = {
    id: secondId,
    name: 'Angular',
};

const allIds = Immutable.List([firstId, secondId]);
const byId = Immutable.Map([[firstId, firstChannel], [secondId, secondChannel]]);

export const getInitialChannels = () => {
    const storedMapJSON = localStorage.getItem(ITEMS_BY_ID);
    const storedListJSON = localStorage.getItem(ITEMS_ALL_ID);

    return {
        allIds: storedListJSON ? Immutable.List(JSON.parse(storedListJSON)) : allIds,
        byId: storedMapJSON ? Immutable.Map(JSON.parse(storedMapJSON)) : byId,
    };
};