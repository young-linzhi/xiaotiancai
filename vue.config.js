// �����webpack���û�͹�����webpack.config.js���кϲ�
module.exports = {
    // NODE_ENV��Node.js ��¶��ִ�нű���ϵͳ����������ͨ������ȷ���ڿ�������������������
    publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
}
