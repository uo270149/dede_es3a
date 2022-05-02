export default {
    collectCoverage: true,
    collectCoverageFrom: [ "src/components/Cart/**","src/components/Details/**",
    "src/components/Fragments/**","src/components/Home/**", "src/components/Login/**",
    "src/components/Requets/**", "src/components/Developers/**" ,"src/App.tsx"], 
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },

}