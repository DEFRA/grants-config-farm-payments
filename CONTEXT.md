# grants-config-farm-payments

Configuration for farm payments grant journeys served through the grants configuration release process.

## Language

**Farm payments**
The grant family represented by `configurations/farm-payments`.
_Avoid_: Land grants, Grasslands, Woodland, Generic grant when this configuration is meant

**Grant configuration**
A versioned set of files that describes a farm payments journey and related integration metadata.
_Avoid_: Form code, Runtime state, Test script

**Grant journey**
The end-to-end user flow rendered from the farm payments configuration.
_Avoid_: Wizard, Survey, Funnel

**Grants UI config**
Configuration consumed by Grants UI to render pages, routes, components, validation, and navigation.
_Avoid_: GAS config, Source code, Test data

**Allowlist**
A farm-payments access list used to control which users or businesses can enter the journey.
_Avoid_: Role, Permission, Feature flag

**Grant identifier**
The stable configured identifier used to connect the farm payments journey to runtime services.
_Avoid_: Display name, Page title, Release version

**Version**
The release version of the configuration package.
_Avoid_: Build number, Commit SHA, Application status

**Changeset**
The release note/version marker required for configuration changes.
_Avoid_: Changelog entry when the `.changeset` file is meant, Commit message

**Hotfix release**
A patch release from a tagged version used only when the normal release path cannot deliver the fix.
_Avoid_: Regular release, Feature branch, Rollback
