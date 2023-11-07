import {} from "styled-components";

import {Theme } from './src/styles/theme'

type customTheme = typeof Theme;

declare module "styled-components" {
    export interface DefaultTheme extends customTheme {}
}