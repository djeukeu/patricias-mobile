## Requirements

- Get the `.env.development` for the project and add to the root directory of the project
- Get the `google-services.json file` for the project and add it to `android/app/` folder
- Get the `GoogleService-Info.plist file` for the project and add it to `ios/patricias/` folder
- Install the correct node version as indicated in `.nvmrc` file
- Install the current or greater ruby version as indicated in `Gemfile` file

## GuideLine

- `Install node packages, using:` yarn
- `Install ruby packages, using:` bundle install
- `Install pods for ios, using:` cd ios/ && pod install
- `Run the android version, using:` yarn android:dev
- `Run the ios version, using:` yarn ios:dev

