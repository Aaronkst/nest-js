import { Test, TestingModule } from "@nestjs/testing";
import { AppController } from "./app.controller";
import { AppModule } from "./app.module";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";

describe("AppController", () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [AppModule, AuthModule],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe("root", () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello().data).toBe("Hello World");
    });
  });
});
