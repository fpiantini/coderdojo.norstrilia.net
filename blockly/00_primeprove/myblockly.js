function blocklyLoaded(blockly) {
  // Called once Blockly is fully loaded.
  window.Blockly = blockly;
}

function showCode() {
  // Generate JavaScript code and display it.
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  var code = Blockly.JavaScript.workspaceToCode();
  alert(code);
}

function runCode() {
  // Generate JavaScript code and run it.
  window.LoopTrap = 1000;
  Blockly.JavaScript.INFINITE_LOOP_TRAP =
    'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
  var code = Blockly.JavaScript.workspaceToCode();
  Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
  try {
    eval(code);
  } catch (e) {
    alert(e);
  }
}

function init() {
  Blockly.inject(document.body,
       {path: './', toolbox: document.getElementById('toolbox'), scrollbars: false, trashcan: true});
       // Let the top-level application know that Blockly is ready.
       window.parent.blocklyLoaded(Blockly);
}


