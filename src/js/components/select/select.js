var Select = {
  //controller
  controller: function(args, extras) {
    return {
      options: args.options,
      select: args.change,
      className: args.className,
      id: args.idName,
      multiple: args.multiple
    }
  },
  //view
  view: function(ctrl) {
    var opts = {
      onchange: ctrl.select
    };

    if (ctrl.className) {
      opts.className = ctrl.className;
    }

    if (ctrl.id) {
      opts.id = ctrl.id;
    }

    if (ctrl.multiple) {
      opts.multiple = true;
    }

    return m("select", opts,
      ctrl.options().map(function(option) {
        return m("option", { value: m.trust(option) }, m.trust(option));
      })
    );
  }
};

export default Select;