import Package from "../../package.json";

export default {
  Query: {
    version() {
      return Package.version;
    }
  }
};
