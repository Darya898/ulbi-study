import {ResolveOptions} from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolvers(opions:BuildOptions):ResolveOptions{
    return  {
        extensions:['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules:[opions.paths.src,'node_modules'],
        mainFiles:['index'],
        alias:{}
    }

}