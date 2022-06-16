var ThroneInheritance = function (kingName) {
  this.edges = new Map();
  this.dead = new Set();
  this.king = kingName;
};

ThroneInheritance.prototype.birth = function (parentName, childName) {
  if (!this.edges.has(parentName)) {
    this.edges.set(parentName, []);
  }
  this.edges.get(parentName).push(childName);
};

ThroneInheritance.prototype.death = function (name) {
  this.dead.add(name);
};

ThroneInheritance.prototype.getInheritanceOrder = function () {
  const ans = [];

  const preorder = (name) => {
    if (!this.dead.has(name)) {
      ans.push(name);
    }
    if (this.edges.has(name)) {
      for (const childName of this.edges.get(name)) {
        preorder(childName);
      }
    }
  }

  preorder(this.king);
  return ans;
};