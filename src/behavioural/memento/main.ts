import { ImageEditor } from './image-editor';
import { ImageEditorBackupManager } from './image-editor-backup-manager';

const imageEditor = new ImageEditor('/media/image.png', 'png');
const backupManager = new ImageEditorBackupManager(imageEditor);

backupManager.backup();
imageEditor.convertFormatTo('gif');

backupManager.backup();
imageEditor.convertFormatTo('bmp');

backupManager.backup();
imageEditor.convertFormatTo('jpg');

console.log(imageEditor); // JPG
backupManager.undo();
console.log(imageEditor); // BMP
backupManager.undo();
console.log(imageEditor); // GIF
backupManager.undo();
console.log(imageEditor); // PNG
backupManager.undo();
console.log(imageEditor); // NO MOMENTOS
