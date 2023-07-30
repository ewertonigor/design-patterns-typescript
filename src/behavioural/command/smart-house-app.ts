import { SmartHouseCommand } from './smart-house-command';

export class SmartHouseApp {
  private commands: { [k: string]: SmartHouseCommand } = {};

  addCommand(key: string, commmand: SmartHouseCommand): void {
    this.commands[key] = commmand;
  }

  executeCommand(key: string): void {
    this.commands[key].execute();
  }

  undoCommand(key: string): void {
    this.commands[key].undo();
  }
}
