type ProcessEnv = string | any;

type Dispatch = typeof store.dispatch;
type Fetch = typeof store.fetch;
type RootState = ReturnType<typeof store.getState>;
