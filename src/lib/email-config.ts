/**
 * Centralized email configuration for Karya Halim Sampoerna
 *
 * This module provides consistent email addresses across the application,
 * eliminating the need for hardcoded email values in components.
 */

/**
 * Primary company email address for main business inquiries
 */
export const PRIMARY_EMAIL = "ptkarya_halim@yahoo.co.id";

/**
 * Secondary email address for hiring and recruitment inquiries
 */
export const SECONDARY_EMAIL = "hire.us@karyahalimsampoerna.id";

/**
 * Additional hiring email alias to ensure all recruitment messages are received
 */
export const HIRING_ALIAS_EMAIL = "hire_us@karyahalimsampoerna.id";

/**
 * Array containing core company email addresses for bulk operations
 */
export const ALL_EMAILS = [PRIMARY_EMAIL, SECONDARY_EMAIL] as const;

/**
 * Email configuration interface for type safety
 */
export interface EmailConfiguration {
  /** Primary company email for business inquiries */
  primary: string;
  /** Secondary email for hiring and recruitment */
  secondary: string;
  /** Array of all email addresses */
  all: readonly string[];
}

/**
 * Complete email configuration object
 */
export const emailConfig: EmailConfiguration = {
  primary: PRIMARY_EMAIL,
  secondary: SECONDARY_EMAIL,
  all: ALL_EMAILS,
} as const;

/**
 * Type guard to validate email configuration structure
 */
export const validateEmailConfig = (config: EmailConfiguration): boolean => {
  return (
    typeof config.primary === "string" &&
    typeof config.secondary === "string" &&
    Array.isArray(config.all) &&
    config.all.includes(config.primary) &&
    config.all.includes(config.secondary) &&
    new Set(config.all).size === config.all.length
  );
};
