import { Rule, SchematicContext, Tree, url, apply, mergeWith, template, FileEntry, forEach } from '@angular-devkit/schematics';
import { strings } from '@angular-devkit/core';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function newProject(_options: any): Rule {
  const name = _options.name

  console.log('The name of the repo will be', name)
  return (tree: Tree, _context: SchematicContext) => {

    const sourceTemplates = url('./files');
    console.log(sourceTemplates)
    console.log(tree.exists('./package.json'))
    const sourceParametrizedTemplates = apply(sourceTemplates, [
      template({ ..._options, ...strings }),
      forEach((fileEntry: FileEntry) => {
        console.log(fileEntry.path)
        // if (tree.exists(fileEntry.path)) {
        //   tree.overwrite(fileEntry.path, fileEntry.content);
        // }
        return fileEntry;
      })
    ]);
    // tree.create('sbrkt.js', 'console.log("test");')
    return mergeWith(sourceParametrizedTemplates)
    return tree;
  };
}
