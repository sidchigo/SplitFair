type BillType = 'Fair' | 'Percentage' | 'Equal';

type calculateBillProps = {
  type: BillType;
  totalAmount?: number;
  totalPeople?: number;
  taxAmount?: number;
  userBills?: userItemsMap[];
};

type userItemsMap = {
  name: string;
  foodType: string;
  isDrinker: boolean;
  items: {
    itemName: string;
    qty: number;
    amount?: number;
    type: string;
    price: number;
  }[];
};

const siddheshBill = {
  name: 'Siddhesh',
  foodType: 'Veg',
  isDrinker: false,
  items: [
    {
      itemName: 'Lasuni Dingri',
      qty: 1,
      price: 300,
      type: 'Veg',
    },
    {
      itemName: 'Paneer Crispy Thread',
      qty: 1,
      price: 300,
      type: 'Veg',
    },
    {
      itemName: 'Paneer Nanking Rice',
      qty: 1,
      price: 400,
      type: 'Veg',
    },
    {
      itemName: 'Prawns Biryani',
      qty: 1,
      price: 400,
      type: 'Non-veg',
    },
    {
      itemName: 'Chicken Lollypop Dry',
      qty: 1,
      price: 260,
      type: 'Non-veg',
    },
  ],
};

const deepakBill = {
  name: 'Deepak',
  foodType: 'Non-veg',
  isDrinker: false,
  items: [
    {
      itemName: 'Prawns Biryani',
      qty: 2,
      price: 400,
      type: 'Non-veg',
    },
    {
      itemName: 'Chicken Lollypop Dry',
      qty: 2 / 3,
      price: 260,
      type: 'Non-veg',
    },
    {
      itemName: 'Water',
      qty: 1,
      price: 20,
      type: 'Veg',
    },
    {
      itemName: 'Ticket',
      qty: 1,
      price: 365,
      type: 'Veg',
    },
  ],
};

const yogeshBill = {
  name: 'Yogesh',
  foodType: 'Non-veg',
  isDrinker: false,
  items: [
    {
      itemName: 'Prawns Biryani',
      qty: 1,
      price: 400,
      type: 'Non-veg',
    },
    {
      itemName: 'Chicken Lollypop Dry',
      qty: 1 / 3,
      price: 260,
      type: 'Non-veg',
    },
    {
      itemName: 'Water',
      qty: 1,
      price: 20,
      type: 'Veg',
    },
    {
      itemName: 'Ticket',
      qty: 1,
      price: 260,
      type: 'Veg',
    },
  ],
};

const calculateBill = (props: calculateBillProps) => {
  const {
    type,
    totalAmount = 0,
    totalPeople = 0,
    taxAmount = 0,
    userBills = [],
  } = props;
  if (type === 'Fair') {
    const userWiseBill = userBills.map(user => {
      const totalAmount = user.items.reduce(
        (acc, item) => acc + Number((item.price * item.qty).toFixed(2)),
        0,
      );
      return {name: user.name, totalAmount};
    });
    const totalBill = userWiseBill.reduce(
      (acc, user) => acc + user.totalAmount,
      0,
    );
    return {userWiseBill, total: totalBill + taxAmount};
  }
};

const bill = calculateBill({
  type: 'Fair',
  userBills: [siddheshBill, deepakBill, yogeshBill],
  taxAmount: 87.5 * 2,
});
console.log('Bill: ', bill);
