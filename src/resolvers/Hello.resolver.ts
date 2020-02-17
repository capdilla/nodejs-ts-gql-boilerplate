import HelloService from "../services/Hello.service";

export default {
  Query: {
    hello() {
      return HelloService.hello();
    }
  },
  Mutation: {
    saySomting(obj: any, { name }: any) {
      console.log(obj, name, "aaa perro");

      return HelloService.hello();
    }
  }
};
