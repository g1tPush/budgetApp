const originalWarn = console.warn.bind(console.warn)

beforeAll(() => {
    console.warn = (msg) =>
        !msg.toString().includes('componentWillReceiveProps') && originalWarn(msg)
})

afterAll(() => {
    console.warn = originalWarn
})

export { }