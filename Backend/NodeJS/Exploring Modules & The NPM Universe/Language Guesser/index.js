import{franc} from 'franc';
import{createRequire} from "module";
const require =createRequire(import.meta.url);
const langs =require("langs");

const input=process.argv[2];
const langcode=franc(input);
if(langcode ==='und'){
    console.log("SORRY, couldn't figure it out! TRY WITH MORE SAMPLE TEXT!")
}else{
    const language =langs.where("3",langcode);
    console.log(`Our best guess is: ${language.name}`);
}