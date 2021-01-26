<script>
    import {onMount} from 'svelte'
    //import * as vis from 'vis-netwonk'

    let canvasHolder 

    let nodes = new vis.DataSet([
        { id: 1, label: "А. Ахматова" },
        { id: 2, label: "Л. Гумилев" },
        { id: 3, label: "Н. Гумилев" },
    ])

    let edges = new vis.DataSet([
        { from: 1, to: 3 },
        { from: 1, to: 2 },
    ])

    onMount(()=>{
      let data = {
        nodes: nodes,
        edges: edges,
      }
      //var DOTstring = 'dinetwork {1 -> 1 -> 2; 2 -> 3; 2 -- 4; 2 -> 1 }';
      //var DOTstring = ' dinetwork { a [label="А. Ахматова"]; n [label="Н. Гумилев"]; l [label="Л. Гумилев"]; a -> n [label="муж"]; a -> l [label="сын"]; }'
      //data = vis.parseDOTNetwork(DOTstring);
      let network = new vis.Network(canvasHolder, {nodes, edges}, {});
        
    })


</script>

<figure>
    <div class="canvas-holder" bind:this={canvasHolder}></div>
    <figcaption>Get browser details using.</figcaption>
</figure>
