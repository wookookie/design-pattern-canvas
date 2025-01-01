/**
 * Singleton
 * - 단 하나의 인스턴스를 생성하고, 어디서든지 그 인스턴스에 접근할 수 있도록 하는 패턴
 * - private 생성자를 사용하게 되어 테스트 시 mock 객체를 주입하기 어려움
 * - module 간 강한 결합으로 테스트하기 어려움
 */

class Grimpan {
  private static instance: Grimpan;

  private constructor(canvas: HTMLElement | null) {
    if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
      throw new Error("canvas element not found");
    }
  }

  initialize() {}
  initializeMenu() {}

  static getInstance() {
    if (!Grimpan.instance) {
      Grimpan.instance = new Grimpan(document.querySelector("#canvas"));
    }

    return Grimpan.instance;
  }
}

export default Grimpan;
