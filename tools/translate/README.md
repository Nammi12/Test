# Translate tool
This tool allows translation string resources for a page, component or layout to be stored in the same directory as the component. It will then traverse the codebase and combine the string resources into a single resource file that will be used for localization.

Used in conjunction with the theme builder, the tool should copy the generated resource files to the ```theme-builder``` directory, from where the theme builder tool will copy it back to the correct location.

## Executing
```sh
npm run i18n
```

## Sample config file
Config file: Located in ```tools/translate/translate.config.json```
```json
{
    // Languages to look for.
    // Will search the entire app root directory recursively
    // for files matching *.<language>.json
    "languages": ["en", "hi"],

    // app root directory. Relative to root dir
    "appDir": "./src/app",

    // Output file paths for each language.
    // Each language resource files can be copied to multiple locations, hence the use of arrays.
    // Relative to root dir.
    "outputs": {
        "en": ["../theme-builder/themes/tavant/i18n/en.json"],
        "hi": ["../theme-builder/themes/cmg/i18n/en.json"]
    },

    // List of module aliases
    "modules": {
        "common": "cmn"
    }
}
```

## Additional packages brought in for this tool
The following NPM packages were installed to support this tool.

If the tool is ever moved out of this codebase into its own package, then these packages can be removed.

* ```node-dir```
