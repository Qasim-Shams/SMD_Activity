import { Platform, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

const PROFILE = {
  name: 'Muhammad Qasim Shams',
  rollNumber: '23i-3044',
};

export default function ProfileScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedText type="subtitle">Profile</ThemedText>

        <ThemedView type="backgroundElement" style={styles.card}>
          <ThemedView type="backgroundElement" style={styles.row}>
            <ThemedText type="small" themeColor="textSecondary">
              Name
            </ThemedText>
            <ThemedText type="title" style={styles.value}>
              {PROFILE.name}
            </ThemedText>
          </ThemedView>

          <ThemedView type="backgroundElement" style={styles.row}>
            <ThemedText type="small" themeColor="textSecondary">
              Roll number
            </ThemedText>
            <ThemedText type="title" style={styles.value}>
              {PROFILE.rollNumber}
            </ThemedText>
          </ThemedView>
        </ThemedView>

        {Platform.OS === 'web' && <WebBadge />}
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    justifyContent: 'center',
    gap: Spacing.four,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  card: {
    alignSelf: 'stretch',
    gap: Spacing.four,
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
  row: {
    gap: Spacing.one,
    alignItems: 'center',
  },
  value: {
    textAlign: 'center',
  },
});
