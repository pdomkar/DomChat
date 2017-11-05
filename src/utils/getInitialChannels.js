import * as Immutable from 'immutable';
import {uuid} from './uuidGenerator';
import {items} from '../constants/localStorageKeys';

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
    const storedMapJSON = localStorage.getItem(items.byId);
    const storedListJSON = localStorage.getItem(items.allIds);

    return {
        allIds: storedListJSON ? Immutable.List(JSON.parse(storedListJSON)) : allIds,
        byId: storedMapJSON ? Immutable.Map(JSON.parse(storedMapJSON)) : byId,
    };
};