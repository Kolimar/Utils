/*
Agrupar Objetos por propiedad

list : array de objetos
property : propiedad en común por la que agrupar.
*/
function groupObjectListBy(list, property){
    return list.reduce((groups, item) => ({
        ...groups,
        [item[property]]: [...(groups[item[property]] || []), item]
      }), {});
}
