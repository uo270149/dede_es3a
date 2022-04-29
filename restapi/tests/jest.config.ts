export default {
    rootDir: './../',
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    collectCoverage: true,
    collectCoverageFrom: ["server.ts", "productoRutas.ts", "usuarioRutas.ts", "pedidoRutas.ts"]
}