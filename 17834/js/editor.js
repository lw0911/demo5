/**
 * Created by 曾荣 on 2016/9/27.
 */

var editor = new wangEditor('editor');
editor.config.uploadImgUrl = '/upload';
editor.config.menus = [
    'source',
    '|',     // '|' 是菜单组的分割线
    'bold',
    'underline',
    'italic',
    'strikethrough',
    'head',
    'quote',
    'eraser',
    'forecolor',
    'bgcolor',
    'img',
    'fontsize',
    'fontfamily',
    'redo',
    'undo'
];
editor.create();
