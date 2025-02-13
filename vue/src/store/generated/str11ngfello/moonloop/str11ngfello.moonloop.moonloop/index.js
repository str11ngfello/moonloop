import { txClient, queryClient, MissingWalletError, registry } from './module';
// @ts-ignore
import { SpVuexError } from '@starport/vuex';
import { Class } from "./module/types/moonloop/class";
import { ClassTemplate } from "./module/types/moonloop/class_template";
import { Collection } from "./module/types/moonloop/collection";
import { CollectionOwner } from "./module/types/moonloop/collection_owner";
import { Contribution } from "./module/types/moonloop/contribution";
import { InstanceOwner } from "./module/types/moonloop/instance_owner";
import { MintStrategy } from "./module/types/moonloop/mint_strategy";
import { Powerup } from "./module/types/moonloop/powerup";
import { PowerupTemplate } from "./module/types/moonloop/powerup_template";
export { Class, ClassTemplate, Collection, CollectionOwner, Contribution, InstanceOwner, MintStrategy, Powerup, PowerupTemplate };
async function initTxClient(vuexGetters) {
    return await txClient(vuexGetters['common/wallet/signer'], {
        addr: vuexGetters['common/env/apiTendermint']
    });
}
async function initQueryClient(vuexGetters) {
    return await queryClient({
        addr: vuexGetters['common/env/apiCosmos']
    });
}
function mergeResults(value, next_values) {
    for (let prop of Object.keys(next_values)) {
        if (Array.isArray(next_values[prop])) {
            value[prop] = [...value[prop], ...next_values[prop]];
        }
        else {
            value[prop] = next_values[prop];
        }
    }
    return value;
}
function getStructure(template) {
    let structure = { fields: [] };
    for (const [key, value] of Object.entries(template)) {
        let field = {};
        field.name = key;
        field.type = typeof value;
        structure.fields.push(field);
    }
    return structure;
}
const getDefaultState = () => {
    return {
        Collection: {},
        CollectionAll: {},
        Class: {},
        ClassAll: {},
        MintStrategy: {},
        MintStrategyAll: {},
        Contribution: {},
        ContributionAll: {},
        PowerupTemplate: {},
        PowerupTemplateAll: {},
        Powerup: {},
        PowerupAll: {},
        GetInstance: {},
        ClassTemplate: {},
        ClassTemplateAll: {},
        CollectionOwner: {},
        CollectionOwnerAll: {},
        InstanceOwner: {},
        InstanceOwnerAll: {},
        _Structure: {
            Class: getStructure(Class.fromPartial({})),
            ClassTemplate: getStructure(ClassTemplate.fromPartial({})),
            Collection: getStructure(Collection.fromPartial({})),
            CollectionOwner: getStructure(CollectionOwner.fromPartial({})),
            Contribution: getStructure(Contribution.fromPartial({})),
            InstanceOwner: getStructure(InstanceOwner.fromPartial({})),
            MintStrategy: getStructure(MintStrategy.fromPartial({})),
            Powerup: getStructure(Powerup.fromPartial({})),
            PowerupTemplate: getStructure(PowerupTemplate.fromPartial({})),
        },
        _Registry: registry,
        _Subscriptions: new Set(),
    };
};
// initial state
const state = getDefaultState();
export default {
    namespaced: true,
    state,
    mutations: {
        RESET_STATE(state) {
            Object.assign(state, getDefaultState());
        },
        QUERY(state, { query, key, value }) {
            state[query][JSON.stringify(key)] = value;
        },
        SUBSCRIBE(state, subscription) {
            state._Subscriptions.add(JSON.stringify(subscription));
        },
        UNSUBSCRIBE(state, subscription) {
            state._Subscriptions.delete(JSON.stringify(subscription));
        }
    },
    getters: {
        getCollection: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Collection[JSON.stringify(params)] ?? {};
        },
        getCollectionAll: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.CollectionAll[JSON.stringify(params)] ?? {};
        },
        getClass: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Class[JSON.stringify(params)] ?? {};
        },
        getClassAll: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.ClassAll[JSON.stringify(params)] ?? {};
        },
        getMintStrategy: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.MintStrategy[JSON.stringify(params)] ?? {};
        },
        getMintStrategyAll: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.MintStrategyAll[JSON.stringify(params)] ?? {};
        },
        getContribution: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Contribution[JSON.stringify(params)] ?? {};
        },
        getContributionAll: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.ContributionAll[JSON.stringify(params)] ?? {};
        },
        getPowerupTemplate: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.PowerupTemplate[JSON.stringify(params)] ?? {};
        },
        getPowerupTemplateAll: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.PowerupTemplateAll[JSON.stringify(params)] ?? {};
        },
        getPowerup: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.Powerup[JSON.stringify(params)] ?? {};
        },
        getPowerupAll: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.PowerupAll[JSON.stringify(params)] ?? {};
        },
        getGetInstance: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.GetInstance[JSON.stringify(params)] ?? {};
        },
        getClassTemplate: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.ClassTemplate[JSON.stringify(params)] ?? {};
        },
        getClassTemplateAll: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.ClassTemplateAll[JSON.stringify(params)] ?? {};
        },
        getCollectionOwner: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.CollectionOwner[JSON.stringify(params)] ?? {};
        },
        getCollectionOwnerAll: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.CollectionOwnerAll[JSON.stringify(params)] ?? {};
        },
        getInstanceOwner: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.InstanceOwner[JSON.stringify(params)] ?? {};
        },
        getInstanceOwnerAll: (state) => (params = { params: {} }) => {
            if (!params.query) {
                params.query = null;
            }
            return state.InstanceOwnerAll[JSON.stringify(params)] ?? {};
        },
        getTypeStructure: (state) => (type) => {
            return state._Structure[type].fields;
        },
        getRegistry: (state) => {
            return state._Registry;
        }
    },
    actions: {
        init({ dispatch, rootGetters }) {
            console.log('Vuex module: str11ngfello.moonloop.moonloop initialized!');
            if (rootGetters['common/env/client']) {
                rootGetters['common/env/client'].on('newblock', () => {
                    dispatch('StoreUpdate');
                });
            }
        },
        resetState({ commit }) {
            commit('RESET_STATE');
        },
        unsubscribe({ commit }, subscription) {
            commit('UNSUBSCRIBE', subscription);
        },
        async StoreUpdate({ state, dispatch }) {
            state._Subscriptions.forEach(async (subscription) => {
                try {
                    const sub = JSON.parse(subscription);
                    await dispatch(sub.action, sub.payload);
                }
                catch (e) {
                    throw new SpVuexError('Subscriptions: ' + e.message);
                }
            });
        },
        async QueryCollection({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryCollection(key.index)).data;
                commit('QUERY', { query: 'Collection', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryCollection', payload: { options: { all }, params: { ...key }, query } });
                return getters['getCollection']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryCollection', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryCollectionAll({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryCollectionAll(query)).data;
                while (all && value.pagination && value.pagination.next_key != null) {
                    let next_values = (await queryClient.queryCollectionAll({ ...query, 'pagination.key': value.pagination.next_key })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'CollectionAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryCollectionAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getCollectionAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryCollectionAll', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryClass({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryClass(key.collectionIndex, key.classTemplateIndex, key.instanceIndex)).data;
                commit('QUERY', { query: 'Class', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryClass', payload: { options: { all }, params: { ...key }, query } });
                return getters['getClass']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryClass', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryClassAll({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryClassAll(query)).data;
                while (all && value.pagination && value.pagination.next_key != null) {
                    let next_values = (await queryClient.queryClassAll({ ...query, 'pagination.key': value.pagination.next_key })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'ClassAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryClassAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getClassAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryClassAll', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryMintStrategy({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryMintStrategy(key.index)).data;
                commit('QUERY', { query: 'MintStrategy', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryMintStrategy', payload: { options: { all }, params: { ...key }, query } });
                return getters['getMintStrategy']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryMintStrategy', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryMintStrategyAll({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryMintStrategyAll(query)).data;
                while (all && value.pagination && value.pagination.next_key != null) {
                    let next_values = (await queryClient.queryMintStrategyAll({ ...query, 'pagination.key': value.pagination.next_key })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'MintStrategyAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryMintStrategyAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getMintStrategyAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryMintStrategyAll', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryContribution({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryContribution(key.collectionIndex, key.classTemplateIndex, key.powerupTemplateIndex, key.instanceIndex)).data;
                commit('QUERY', { query: 'Contribution', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryContribution', payload: { options: { all }, params: { ...key }, query } });
                return getters['getContribution']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryContribution', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryContributionAll({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryContributionAll(query)).data;
                while (all && value.pagination && value.pagination.next_key != null) {
                    let next_values = (await queryClient.queryContributionAll({ ...query, 'pagination.key': value.pagination.next_key })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'ContributionAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryContributionAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getContributionAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryContributionAll', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryPowerupTemplate({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryPowerupTemplate(key.collectionIndex, key.classTemplateIndex, key.powerupTemplateIndex)).data;
                commit('QUERY', { query: 'PowerupTemplate', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryPowerupTemplate', payload: { options: { all }, params: { ...key }, query } });
                return getters['getPowerupTemplate']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryPowerupTemplate', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryPowerupTemplateAll({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryPowerupTemplateAll(query)).data;
                while (all && value.pagination && value.pagination.next_key != null) {
                    let next_values = (await queryClient.queryPowerupTemplateAll({ ...query, 'pagination.key': value.pagination.next_key })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'PowerupTemplateAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryPowerupTemplateAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getPowerupTemplateAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryPowerupTemplateAll', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryPowerup({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryPowerup(key.collectionIndex, key.classTemplateIndex, key.powerupTemplateIndex, key.instanceIndex)).data;
                commit('QUERY', { query: 'Powerup', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryPowerup', payload: { options: { all }, params: { ...key }, query } });
                return getters['getPowerup']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryPowerup', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryPowerupAll({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryPowerupAll(query)).data;
                while (all && value.pagination && value.pagination.next_key != null) {
                    let next_values = (await queryClient.queryPowerupAll({ ...query, 'pagination.key': value.pagination.next_key })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'PowerupAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryPowerupAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getPowerupAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryPowerupAll', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryGetInstance({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryGetInstance(query)).data;
                while (all && value.pagination && value.pagination.next_key != null) {
                    let next_values = (await queryClient.queryGetInstance({ ...query, 'pagination.key': value.pagination.next_key })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'GetInstance', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryGetInstance', payload: { options: { all }, params: { ...key }, query } });
                return getters['getGetInstance']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryGetInstance', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryClassTemplate({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryClassTemplate(key.collectionIndex, key.classTemplateIndex)).data;
                commit('QUERY', { query: 'ClassTemplate', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryClassTemplate', payload: { options: { all }, params: { ...key }, query } });
                return getters['getClassTemplate']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryClassTemplate', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryClassTemplateAll({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryClassTemplateAll(query)).data;
                while (all && value.pagination && value.pagination.next_key != null) {
                    let next_values = (await queryClient.queryClassTemplateAll({ ...query, 'pagination.key': value.pagination.next_key })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'ClassTemplateAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryClassTemplateAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getClassTemplateAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryClassTemplateAll', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryCollectionOwner({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryCollectionOwner(key.index)).data;
                commit('QUERY', { query: 'CollectionOwner', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryCollectionOwner', payload: { options: { all }, params: { ...key }, query } });
                return getters['getCollectionOwner']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryCollectionOwner', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryCollectionOwnerAll({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryCollectionOwnerAll(query)).data;
                while (all && value.pagination && value.pagination.next_key != null) {
                    let next_values = (await queryClient.queryCollectionOwnerAll({ ...query, 'pagination.key': value.pagination.next_key })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'CollectionOwnerAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryCollectionOwnerAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getCollectionOwnerAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryCollectionOwnerAll', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryInstanceOwner({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryInstanceOwner(key.index)).data;
                commit('QUERY', { query: 'InstanceOwner', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryInstanceOwner', payload: { options: { all }, params: { ...key }, query } });
                return getters['getInstanceOwner']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryInstanceOwner', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async QueryInstanceOwnerAll({ commit, rootGetters, getters }, { options: { subscribe, all } = { subscribe: false, all: false }, params, query = null }) {
            try {
                const key = params ?? {};
                const queryClient = await initQueryClient(rootGetters);
                let value = (await queryClient.queryInstanceOwnerAll(query)).data;
                while (all && value.pagination && value.pagination.next_key != null) {
                    let next_values = (await queryClient.queryInstanceOwnerAll({ ...query, 'pagination.key': value.pagination.next_key })).data;
                    value = mergeResults(value, next_values);
                }
                commit('QUERY', { query: 'InstanceOwnerAll', key: { params: { ...key }, query }, value });
                if (subscribe)
                    commit('SUBSCRIBE', { action: 'QueryInstanceOwnerAll', payload: { options: { all }, params: { ...key }, query } });
                return getters['getInstanceOwnerAll']({ params: { ...key }, query }) ?? {};
            }
            catch (e) {
                throw new SpVuexError('QueryClient:QueryInstanceOwnerAll', 'API Node Unavailable. Could not perform query: ' + e.message);
            }
        },
        async sendMsgUpdateCollection({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgUpdateCollection(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgUpdateCollection:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateCollection:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgDeleteClass({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgDeleteClass(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgDeleteClass:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteClass:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgDeleteContribution({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgDeleteContribution(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgDeleteContribution:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteContribution:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgDeleteInstanceOwner({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgDeleteInstanceOwner(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgDeleteInstanceOwner:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteInstanceOwner:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgDeleteCollection({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgDeleteCollection(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgDeleteCollection:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteCollection:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgUpdateMintStrategy({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgUpdateMintStrategy(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgUpdateMintStrategy:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateMintStrategy:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgUpdateClass({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgUpdateClass(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgUpdateClass:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateClass:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgUpdateClassTemplate({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgUpdateClassTemplate(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgUpdateClassTemplate:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateClassTemplate:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgDeletePowerup({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgDeletePowerup(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgDeletePowerup:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeletePowerup:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgUpdatePowerup({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgUpdatePowerup(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgUpdatePowerup:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdatePowerup:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgCreatePowerup({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreatePowerup(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreatePowerup:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreatePowerup:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgCreateMintStrategy({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateMintStrategy(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateMintStrategy:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateMintStrategy:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgCreateInstanceOwner({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateInstanceOwner(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateInstanceOwner:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateInstanceOwner:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgCreateCollectionOwner({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateCollectionOwner(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateCollectionOwner:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateCollectionOwner:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgUpdateCollectionOwner({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgUpdateCollectionOwner(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgUpdateCollectionOwner:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateCollectionOwner:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgSetCollectionMintStrategy({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgSetCollectionMintStrategy(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgSetCollectionMintStrategy:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgSetCollectionMintStrategy:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgDeletePowerupTemplate({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgDeletePowerupTemplate(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgDeletePowerupTemplate:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeletePowerupTemplate:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgSendPower({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgSendPower(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgSendPower:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgSendPower:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgCreateClass({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateClass(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateClass:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateClass:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgUpdateInstanceOwner({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgUpdateInstanceOwner(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgUpdateInstanceOwner:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateInstanceOwner:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgCreatePowerupTemplate({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreatePowerupTemplate(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreatePowerupTemplate:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreatePowerupTemplate:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgDeleteClassTemplate({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgDeleteClassTemplate(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgDeleteClassTemplate:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteClassTemplate:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgMint({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgMint(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgMint:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgMint:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgCreateCollection({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateCollection(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateCollection:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateCollection:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgDeleteCollectionOwner({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgDeleteCollectionOwner(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgDeleteCollectionOwner:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteCollectionOwner:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgCreateContribution({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateContribution(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateContribution:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateContribution:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgDeleteMintStrategy({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgDeleteMintStrategy(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgDeleteMintStrategy:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteMintStrategy:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgFreePower({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgFreePower(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgFreePower:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgFreePower:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgUpdatePowerupTemplate({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgUpdatePowerupTemplate(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgUpdatePowerupTemplate:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdatePowerupTemplate:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgUpdateContribution({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgUpdateContribution(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgUpdateContribution:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateContribution:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async sendMsgCreateClassTemplate({ rootGetters }, { value, fee = [], memo = '' }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateClassTemplate(value);
                const result = await txClient.signAndBroadcast([msg], { fee: { amount: fee,
                        gas: "200000" }, memo });
                return result;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateClassTemplate:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateClassTemplate:Send', 'Could not broadcast Tx: ' + e.message);
                }
            }
        },
        async MsgUpdateCollection({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgUpdateCollection(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgUpdateCollection:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateCollection:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgDeleteClass({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgDeleteClass(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgDeleteClass:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteClass:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgDeleteContribution({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgDeleteContribution(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgDeleteContribution:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteContribution:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgDeleteInstanceOwner({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgDeleteInstanceOwner(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgDeleteInstanceOwner:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteInstanceOwner:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgDeleteCollection({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgDeleteCollection(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgDeleteCollection:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteCollection:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgUpdateMintStrategy({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgUpdateMintStrategy(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgUpdateMintStrategy:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateMintStrategy:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgUpdateClass({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgUpdateClass(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgUpdateClass:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateClass:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgUpdateClassTemplate({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgUpdateClassTemplate(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgUpdateClassTemplate:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateClassTemplate:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgDeletePowerup({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgDeletePowerup(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgDeletePowerup:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeletePowerup:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgUpdatePowerup({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgUpdatePowerup(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgUpdatePowerup:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdatePowerup:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgCreatePowerup({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreatePowerup(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreatePowerup:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreatePowerup:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgCreateMintStrategy({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateMintStrategy(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateMintStrategy:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateMintStrategy:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgCreateInstanceOwner({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateInstanceOwner(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateInstanceOwner:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateInstanceOwner:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgCreateCollectionOwner({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateCollectionOwner(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateCollectionOwner:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateCollectionOwner:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgUpdateCollectionOwner({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgUpdateCollectionOwner(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgUpdateCollectionOwner:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateCollectionOwner:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgSetCollectionMintStrategy({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgSetCollectionMintStrategy(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgSetCollectionMintStrategy:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgSetCollectionMintStrategy:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgDeletePowerupTemplate({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgDeletePowerupTemplate(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgDeletePowerupTemplate:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeletePowerupTemplate:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgSendPower({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgSendPower(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgSendPower:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgSendPower:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgCreateClass({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateClass(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateClass:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateClass:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgUpdateInstanceOwner({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgUpdateInstanceOwner(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgUpdateInstanceOwner:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateInstanceOwner:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgCreatePowerupTemplate({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreatePowerupTemplate(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreatePowerupTemplate:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreatePowerupTemplate:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgDeleteClassTemplate({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgDeleteClassTemplate(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgDeleteClassTemplate:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteClassTemplate:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgMint({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgMint(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgMint:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgMint:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgCreateCollection({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateCollection(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateCollection:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateCollection:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgDeleteCollectionOwner({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgDeleteCollectionOwner(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgDeleteCollectionOwner:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteCollectionOwner:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgCreateContribution({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateContribution(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateContribution:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateContribution:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgDeleteMintStrategy({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgDeleteMintStrategy(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgDeleteMintStrategy:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgDeleteMintStrategy:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgFreePower({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgFreePower(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgFreePower:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgFreePower:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgUpdatePowerupTemplate({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgUpdatePowerupTemplate(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgUpdatePowerupTemplate:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdatePowerupTemplate:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgUpdateContribution({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgUpdateContribution(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgUpdateContribution:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgUpdateContribution:Create', 'Could not create message: ' + e.message);
                }
            }
        },
        async MsgCreateClassTemplate({ rootGetters }, { value }) {
            try {
                const txClient = await initTxClient(rootGetters);
                const msg = await txClient.msgCreateClassTemplate(value);
                return msg;
            }
            catch (e) {
                if (e == MissingWalletError) {
                    throw new SpVuexError('TxClient:MsgCreateClassTemplate:Init', 'Could not initialize signing client. Wallet is required.');
                }
                else {
                    throw new SpVuexError('TxClient:MsgCreateClassTemplate:Create', 'Could not create message: ' + e.message);
                }
            }
        },
    }
};
