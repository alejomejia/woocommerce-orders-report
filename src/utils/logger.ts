type Logger = {
  [key: string]: (message: string) => void;
};

export const logger: Logger = {
  info: (message) => console.log('ℹ️ \x1b[94mINFO:\x1b[0m', message),
  success: (message) => console.log('✅ \x1b[32mSUCCESS:\x1b[0m', message),
  error: (message) => console.log('❌ \x1b[91mERROR:\x1b[0m', message),
  warning: (message) => console.log('⚠️ \x1b[91mWARNING:\x1b[0m', message),
};
