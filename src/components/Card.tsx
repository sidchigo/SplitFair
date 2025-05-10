import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {ChevronRight} from 'react-native-feather';
import colors from '../styles/colors';

type CardProps = {
  title?: string;
  type: 'bill' | 'group';
  currency?: string;
  groupName?: string;
  amount?: number;
  memberCount?: number;
  totalBillCount?: number;
  pendingBillCount?: number;
  settledBillCount?: number;
  showDetails?: boolean;
  onPress?: () => void;
};

const cardStyles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 8,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  groupContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 8,
    padding: 16,
    justifyContent: 'space-between',
    marginVertical: 8,
    gap: 16,
  },
  bottomGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: colors.lightGray,
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 8,
  },
  boldText: {
    fontSize: 24,
    fontFamily: 'InterBold',
  },
  mediumGrayText: {
    fontSize: 14,
    fontFamily: 'InterMedium',
    color: colors.gray,
  },
  regularGrayText: {
    fontSize: 12,
    fontFamily: 'InterRegular',
    color: colors.gray,
  },
  smallText: {
    fontSize: 12,
    fontFamily: 'InterMedium',
    color: colors.gray,
  },
  rightFlex: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  leftFlex: {
    gap: 8,
  },
  normalFlex: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  rightBorder: {
    borderRightWidth: 1,
    borderRightColor: colors.lightGray,
    paddingRight: 16,
  },
  centerText: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'InterRegular',
  },
});

export function Card(props: CardProps) {
  const {
    type,
    title = '',
    currency = 'Rs',
    groupName = '',
    memberCount = 0,
    amount = 0,
    totalBillCount = 0,
    pendingBillCount = 0,
    settledBillCount = 0,
    showDetails = true,
    onPress = () => undefined,
  } = props;

  if (type === 'bill') {
    return (
      <Pressable onPress={onPress}>
        <View style={cardStyles.container}>
          <View style={cardStyles.leftFlex}>
            <Text style={cardStyles.boldText}>
              {currency} {amount}
            </Text>
            <Text>{title}</Text>
          </View>
          <View style={cardStyles.rightFlex}>
            <Text style={cardStyles.smallText}>{groupName}</Text>
            <ChevronRight stroke="black" width={20} height={20} />
          </View>
        </View>
      </Pressable>
    );
  }

  if (type === 'group') {
    return (
      <Pressable onPress={onPress}>
        <View style={cardStyles.groupContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={cardStyles.leftFlex}>
              <Text style={cardStyles.mediumGrayText}>{groupName}</Text>
              <View style={cardStyles.normalFlex}>
                <Image source={require('../assets/images/people.png')} />
                <Text style={cardStyles.regularGrayText}>
                  {memberCount} members
                </Text>
              </View>
            </View>
            <View style={cardStyles.rightFlex}>
              <ChevronRight stroke="black" width={20} height={20} />
            </View>
          </View>
          {showDetails && (
            <View style={cardStyles.bottomGroup}>
              <View style={cardStyles.rightBorder}>
                <Text style={cardStyles.centerText}>Total Bills</Text>
                <Text style={cardStyles.centerText}>{totalBillCount}</Text>
              </View>
              <View style={cardStyles.rightBorder}>
                <Text style={cardStyles.centerText}>Pending Bills</Text>
                <Text style={cardStyles.centerText}>{pendingBillCount}</Text>
              </View>
              <View>
                <Text style={cardStyles.centerText}>Settled Bills</Text>
                <Text style={cardStyles.centerText}>{settledBillCount}</Text>
              </View>
            </View>
          )}
        </View>
      </Pressable>
    );
  }
}
