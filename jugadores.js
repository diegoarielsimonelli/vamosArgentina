import fs from 'fs'

export class Jugadores {
  constructor(path) {
    this.fileName = path;
  }

  async getAll() {
    try {
      const jugadores = await fs.promises.readFile(this.fileName, "utf-8");

      return JSON.parse(jugadores);
    } catch (error) {
      console.log(error);
    }
  }
}
