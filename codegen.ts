
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://namihei.cyberedge.jp:51337/graphql",
  // documents: "./graphql/schema.graphql",
  // documents: "./app/**/*.tsx",
  generates: {
    // graphql: {
    //   preset: "client",
    //   plugins: ["typescript"]
    // },
    // "./graphql.schema.json": {
    "./lib/": {
      preset: "client",
      plugins: [
        "typescript",
        "typescript-operations"
      ]
    }
  }
};

export default config;
