import { ConfigContext, ExpoConfig } from "expo/config";
import { version } from "./package.json";

// Constants
const EAS_PROJECT_ID = "9422db8d-57ed-4073-991c-a0b386f3d62f";
const PROJECT_SLUG = "cook-ki-book";
const OWNER = "sahaj_arya";

// App Config
const APP_NAME = "cook-ki-book";
const BUNDLE_IDENTIFIER = "com.cook-ki-book.ckb";
const PACKAGE_NAME = "com.cook-ki-book.ckb";
const ICON = "./assets/images/icon.png";
const ADAPTIVE_ICON = "./assets/images/adaptive-icon.png";
const SCHEME = "ckb";

export default ({ config }: ConfigContext): ExpoConfig => {
  console.log("⚙️ Building app for environment:", process.env.APP_ENV);
  const { name, bundleIdentifier, icon, adaptiveIcon, packageName, scheme } =
    getDynamicAppConfig(
      (process.env.APP_ENV as "development" | "preview" | "production") ||
        "development"
    );

  return {
    ...config,
    name: name,
    version: version,
    slug: PROJECT_SLUG,
    orientation: "portrait",
    userInterfaceStyle: "automatic",
    newArchEnabled: true,
    icon: icon,
    scheme: scheme,
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: bundleIdentifier,
      infoPlist: {
        UIBackgroundModes: ["location", "fetch", "remote-notification"],
      },
    },
    android: {
      package: packageName,
      adaptiveIcon: {
        foregroundImage: adaptiveIcon,
        backgroundColor: "#ffffff",
      },
    },
    updates: {
      url: `https://u.expo.dev/${EAS_PROJECT_ID}`,
    },
    runtimeVersion: {
      policy: "appVersion",
    },
    extra: {
      router: {},
      eas: {
        projectId: EAS_PROJECT_ID,
      },
    },
    web: {
      bundler: "metro",
      output: "static",
      favicon: "./assets/images/favicon.png",
    },
    plugins: ["expo-router", "expo-secure-store"],
    experiments: {
      typedRoutes: true,
    },
    owner: OWNER,
  };
};

// Dynamic configuration based on environment
export const getDynamicAppConfig = (
  environment: "development" | "preview" | "production"
) => {
  if (environment === "production") {
    return {
      name: APP_NAME,
      bundleIdentifier: BUNDLE_IDENTIFIER,
      packageName: PACKAGE_NAME,
      icon: ICON,
      adaptiveIcon: ADAPTIVE_ICON,
      scheme: SCHEME,
    };
  }

  if (environment === "preview") {
    return {
      name: `${APP_NAME} Preview`,
      bundleIdentifier: `${BUNDLE_IDENTIFIER}.preview`,
      packageName: `${PACKAGE_NAME}.preview`,
      icon: ICON.replace(".png", "-preview.png"), // Adjust if you have preview-specific icons
      adaptiveIcon: ADAPTIVE_ICON.replace(".png", "-preview.png"),
      scheme: `${SCHEME}-preview`,
    };
  }

  return {
    name: `${APP_NAME} Dev`,
    bundleIdentifier: `${BUNDLE_IDENTIFIER}.dev`,
    packageName: `${PACKAGE_NAME}.dev`,
    icon: ICON.replace(".png", ".png"), // Adjust if you have dev-specific icons     icon: ICON.replace(".png", "-dev.png"),

    adaptiveIcon: ADAPTIVE_ICON.replace(".png", "-dev.png"),
    scheme: `${SCHEME}-dev`,
  };
};
