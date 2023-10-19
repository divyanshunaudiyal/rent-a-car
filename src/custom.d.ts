// Create a file named "custom.d.ts" in your project's source directory (e.g., src/custom.d.ts).

declare module "*.png" {
  const value: string;
  export default value;
}
