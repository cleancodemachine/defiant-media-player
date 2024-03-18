import '@testing-library/jest-dom'
import { mswServer } from './mocks/mockServer.js'


beforeEach(() => mswServer.listen())
afterEach(() => mswServer.resetHandlers())
afterAll(() => mswServer.close())