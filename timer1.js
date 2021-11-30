const timing = (time1) => {
    if (time1 > 0 && typeof time1 === "number") {
      setTimeout(() => {
        console.log("Wake up!")
        process.stdout.write('\x07');
      }, time1 * 1000);
    }
  };

timing(5);