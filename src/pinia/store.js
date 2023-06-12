import { defineStore } from 'pinia'

// ����Զ� `defineStore()` �ķ���ֵ�������������������ʹ�� store �����֣�ͬʱ�� `use` ��ͷ���� `Store` ��β��(���� `useUserStore`��`useCartStore`��`useProductStore`)
// ��һ�����������Ӧ���� Store ��Ψһ ID��
export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 0,
        token: '1213'
    }),
    getters: {
        getToken() {
            return this.token;
        },
    },
    actions: {
        setToken(token) {
            this.token = token;
        },
    },
})