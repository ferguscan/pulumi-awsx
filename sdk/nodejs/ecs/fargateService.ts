// *** WARNING: this file was generated by pulumi-gen-awsx. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "../types/input";
import * as outputs from "../types/output";
import * as enums from "../types/enums";
import * as utilities from "../utilities";

import * as pulumiAws from "@pulumi/aws";

/**
 * Create an ECS Service resource for Fargate with the given unique name, arguments, and options.
 * Creates Task definition if `taskDefinitionArgs` is specified.
 */
export class FargateService extends pulumi.ComponentResource {
    /** @internal */
    public static readonly __pulumiType = 'awsx:ecs:FargateService';

    /**
     * Returns true if the given object is an instance of FargateService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FargateService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FargateService.__pulumiType;
    }

    /**
     * Underlying ECS Service resource
     */
    public /*out*/ readonly service!: pulumi.Output<pulumiAws.ecs.Service>;
    /**
     * Underlying Fargate component resource if created from args
     */
    public readonly taskDefinition!: pulumi.Output<pulumiAws.ecs.TaskDefinition | undefined>;

    /**
     * Create a FargateService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: FargateServiceArgs, opts?: pulumi.ComponentResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (!opts.id) {
            resourceInputs["alarms"] = args ? args.alarms : undefined;
            resourceInputs["assignPublicIp"] = args ? args.assignPublicIp : undefined;
            resourceInputs["cluster"] = args ? args.cluster : undefined;
            resourceInputs["continueBeforeSteadyState"] = args ? args.continueBeforeSteadyState : undefined;
            resourceInputs["deploymentCircuitBreaker"] = args ? args.deploymentCircuitBreaker : undefined;
            resourceInputs["deploymentController"] = args ? args.deploymentController : undefined;
            resourceInputs["deploymentMaximumPercent"] = args ? args.deploymentMaximumPercent : undefined;
            resourceInputs["deploymentMinimumHealthyPercent"] = args ? args.deploymentMinimumHealthyPercent : undefined;
            resourceInputs["desiredCount"] = args ? args.desiredCount : undefined;
            resourceInputs["enableEcsManagedTags"] = args ? args.enableEcsManagedTags : undefined;
            resourceInputs["enableExecuteCommand"] = args ? args.enableExecuteCommand : undefined;
            resourceInputs["forceNewDeployment"] = args ? args.forceNewDeployment : undefined;
            resourceInputs["healthCheckGracePeriodSeconds"] = args ? args.healthCheckGracePeriodSeconds : undefined;
            resourceInputs["iamRole"] = args ? args.iamRole : undefined;
            resourceInputs["loadBalancers"] = args ? args.loadBalancers : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networkConfiguration"] = args ? args.networkConfiguration : undefined;
            resourceInputs["placementConstraints"] = args ? args.placementConstraints : undefined;
            resourceInputs["platformVersion"] = args ? args.platformVersion : undefined;
            resourceInputs["propagateTags"] = args ? args.propagateTags : undefined;
            resourceInputs["schedulingStrategy"] = args ? args.schedulingStrategy : undefined;
            resourceInputs["serviceConnectConfiguration"] = args ? args.serviceConnectConfiguration : undefined;
            resourceInputs["serviceRegistries"] = args ? args.serviceRegistries : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["taskDefinition"] = args ? args.taskDefinition : undefined;
            resourceInputs["taskDefinitionArgs"] = args ? args.taskDefinitionArgs : undefined;
            resourceInputs["triggers"] = args ? args.triggers : undefined;
            resourceInputs["service"] = undefined /*out*/;
        } else {
            resourceInputs["service"] = undefined /*out*/;
            resourceInputs["taskDefinition"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FargateService.__pulumiType, name, resourceInputs, opts, true /*remote*/);
    }
}

/**
 * The set of arguments for constructing a FargateService resource.
 */
export interface FargateServiceArgs {
    /**
     * Information about the CloudWatch alarms. See below.
     */
    alarms?: pulumi.Input<pulumiAws.types.input.ecs.ServiceAlarms>;
    /**
     * Assign a public IP address to the ENI (Fargate launch type only). Valid values are `true` or `false`. Default `false`.
     */
    assignPublicIp?: pulumi.Input<boolean>;
    /**
     * ARN of an ECS cluster.
     */
    cluster?: pulumi.Input<string>;
    /**
     * If `true`, this provider will not wait for the service to reach a steady state (like [`aws ecs wait services-stable`](https://docs.aws.amazon.com/cli/latest/reference/ecs/wait/services-stable.html)) before continuing. Default `false`.
     */
    continueBeforeSteadyState?: pulumi.Input<boolean>;
    /**
     * Configuration block for deployment circuit breaker. See below.
     */
    deploymentCircuitBreaker?: pulumi.Input<pulumiAws.types.input.ecs.ServiceDeploymentCircuitBreaker>;
    /**
     * Configuration block for deployment controller configuration. See below.
     */
    deploymentController?: pulumi.Input<pulumiAws.types.input.ecs.ServiceDeploymentController>;
    /**
     * Upper limit (as a percentage of the service's desiredCount) of the number of running tasks that can be running in a service during a deployment. Not valid when using the `DAEMON` scheduling strategy.
     */
    deploymentMaximumPercent?: pulumi.Input<number>;
    /**
     * Lower limit (as a percentage of the service's desiredCount) of the number of running tasks that must remain running and healthy in a service during a deployment.
     */
    deploymentMinimumHealthyPercent?: pulumi.Input<number>;
    /**
     * Number of instances of the task definition to place and keep running. Defaults to 1. Do not specify if using the `DAEMON` scheduling strategy.
     */
    desiredCount?: pulumi.Input<number>;
    /**
     * Specifies whether to enable Amazon ECS managed tags for the tasks within the service.
     */
    enableEcsManagedTags?: pulumi.Input<boolean>;
    /**
     * Specifies whether to enable Amazon ECS Exec for the tasks within the service.
     */
    enableExecuteCommand?: pulumi.Input<boolean>;
    /**
     * Enable to force a new task deployment of the service. This can be used to update tasks to use a newer Docker image with same image/tag combination (e.g., `myimage:latest`), roll Fargate tasks onto a newer platform version, or immediately deploy `ordered_placement_strategy` and `placement_constraints` updates.
     */
    forceNewDeployment?: pulumi.Input<boolean>;
    /**
     * Seconds to ignore failing load balancer health checks on newly instantiated tasks to prevent premature shutdown, up to 2147483647. Only valid for services configured to use load balancers.
     */
    healthCheckGracePeriodSeconds?: pulumi.Input<number>;
    /**
     * ARN of the IAM role that allows Amazon ECS to make calls to your load balancer on your behalf. This parameter is required if you are using a load balancer with your service, but only if your task definition does not use the `awsvpc` network mode. If using `awsvpc` network mode, do not specify this role. If your account has already created the Amazon ECS service-linked role, that role is used by default for your service unless you specify a role here.
     */
    iamRole?: pulumi.Input<string>;
    /**
     * Configuration block for load balancers. See below.
     */
    loadBalancers?: pulumi.Input<pulumi.Input<pulumiAws.types.input.ecs.ServiceLoadBalancer>[]>;
    /**
     * Name of the service (up to 255 letters, numbers, hyphens, and underscores)
     *
     * The following arguments are optional:
     */
    name?: pulumi.Input<string>;
    /**
     * Network configuration for the service. This parameter is required for task definitions that use the `awsvpc` network mode to receive their own Elastic Network Interface, and it is not supported for other network modes. See below.
     */
    networkConfiguration?: pulumi.Input<pulumiAws.types.input.ecs.ServiceNetworkConfiguration>;
    /**
     * Rules that are taken into consideration during task placement. Updates to this configuration will take effect next task deployment unless `force_new_deployment` is enabled. Maximum number of `placement_constraints` is `10`. See below.
     */
    placementConstraints?: pulumi.Input<pulumi.Input<pulumiAws.types.input.ecs.ServicePlacementConstraint>[]>;
    /**
     * Platform version on which to run your service. Only applicable for `launch_type` set to `FARGATE`. Defaults to `LATEST`. More information about Fargate platform versions can be found in the [AWS ECS User Guide](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html).
     */
    platformVersion?: pulumi.Input<string>;
    /**
     * Specifies whether to propagate the tags from the task definition or the service to the tasks. The valid values are `SERVICE` and `TASK_DEFINITION`.
     */
    propagateTags?: pulumi.Input<string>;
    /**
     * Scheduling strategy to use for the service. The valid values are `REPLICA` and `DAEMON`. Defaults to `REPLICA`. Note that [*Tasks using the Fargate launch type or the `CODE_DEPLOY` or `EXTERNAL` deployment controller types don't support the `DAEMON` scheduling strategy*](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CreateService.html).
     */
    schedulingStrategy?: pulumi.Input<string>;
    /**
     * The ECS Service Connect configuration for this service to discover and connect to services, and be discovered by, and connected from, other services within a namespace. See below.
     */
    serviceConnectConfiguration?: pulumi.Input<pulumiAws.types.input.ecs.ServiceServiceConnectConfiguration>;
    /**
     * Service discovery registries for the service. The maximum number of `service_registries` blocks is `1`. See below.
     */
    serviceRegistries?: pulumi.Input<pulumiAws.types.input.ecs.ServiceServiceRegistries>;
    /**
     * Key-value map of resource tags. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
     */
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Family and revision (`family:revision`) or full ARN of the task definition that you want to run in your service. Either [taskDefinition] or [taskDefinitionArgs] must be provided.
     */
    taskDefinition?: pulumi.Input<string>;
    /**
     * The args of task definition that you want to run in your service. Either [taskDefinition] or [taskDefinitionArgs] must be provided.
     */
    taskDefinitionArgs?: inputs.ecs.FargateServiceTaskDefinitionArgs;
    /**
     * Map of arbitrary keys and values that, when changed, will trigger an in-place update (redeployment). Useful with `timestamp()`. See example above.
     */
    triggers?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
